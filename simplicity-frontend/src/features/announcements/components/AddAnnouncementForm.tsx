import { useForm } from 'react-hook-form';
import {
  announcementCreateSchema,
  type AnnouncementCreateSchemaType,
} from '@/features/announcements/model/announcement.create.schema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shadcn/components/form.tsx';
import { Input } from '@/shadcn/components/input.tsx';
import { Button } from '@/shadcn/components/button.tsx';

export const AddAnnouncementForm = () => {
  const form = useForm<AnnouncementCreateSchemaType>({
    resolver: zodResolver(announcementCreateSchema),
    defaultValues: {
      title: '',
      content: '',
      publicationDate: '',
      categoryIds: [],
    },
  });

  function onSubmit(values: AnnouncementCreateSchemaType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-100"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2">Title</FormLabel>
              <FormControl>
                <Input placeholder="Announcement Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit self-end">
          Submit
        </Button>
      </form>
    </Form>
  );
};
