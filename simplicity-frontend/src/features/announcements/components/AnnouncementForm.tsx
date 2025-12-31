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
import { Textarea } from '@/shadcn/components/textarea.tsx';
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from '@/shadcn/components/combobox.tsx';
import { useCategories } from '@/features/announcements/hooks/useCategories.ts';
import { useAddAnnouncement } from '@/features/announcements/hooks/useAddAnnouncement.ts';

export const AnnouncementForm = () => {
  const { data: categories } = useCategories();
  const comboboxAnchor = useComboboxAnchor();
  const { mutate: addAnnouncement } = useAddAnnouncement();

  const form = useForm<AnnouncementCreateSchemaType>({
    resolver: zodResolver(announcementCreateSchema),
    defaultValues: {
      title: '',
      content: '',
      publicationDate: '',
      categoryNames: [],
    },
  });

  function onSubmit(values: AnnouncementCreateSchemaType) {
    addAnnouncement(values);
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
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2">Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Announcement Details" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="publicationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2">Publication Date</FormLabel>
              <FormControl>
                <Input placeholder="MM/DD/YYYY HH:mm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryNames"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2">Categories</FormLabel>
              <FormControl>
                <Combobox
                  items={categories.map((category) => ({
                    id: category.id,
                    name: category.name,
                  }))}
                  multiple
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <ComboboxChips ref={comboboxAnchor}>
                    {field.value.map((category) => (
                      <ComboboxChip key={category}>{category}</ComboboxChip>
                    ))}
                    <ComboboxChipsInput
                      placeholder={
                        field.value.length === 0 ? 'Select categories...' : ''
                      }
                    />
                  </ComboboxChips>
                  <ComboboxContent anchor={comboboxAnchor.current}>
                    <ComboboxEmpty>No categories available.</ComboboxEmpty>
                    <ComboboxList>
                      {(item: (typeof categories)[0]) => (
                        <ComboboxItem key={item.id} value={item.name}>
                          {item.name}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
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
