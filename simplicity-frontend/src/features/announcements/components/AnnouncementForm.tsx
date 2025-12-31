import { useForm } from 'react-hook-form';
import {
  announcementSchema,
  type AnnouncementSchemaType,
} from '@/features/announcements/model/announcementSchema.ts';
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
import { useQueryClient } from '@tanstack/react-query';
import { announcementsQueryOptions } from '@/features/announcements/hooks/useAnnouncements.ts';
import { format } from 'date-fns';
import { useEditAnnouncement } from '@/features/announcements/hooks/useEditAnnouncement.ts';
import { PUB_DATE_INPUT_FORMAT } from '@/features/announcements/consts.ts';

interface Props {
  id?: string;
}

export const AnnouncementForm = (props: Props) => {
  const { data: categories } = useCategories();
  const queryClient = useQueryClient();
  const announcementToEdit = queryClient
    .getQueryData(announcementsQueryOptions.queryKey)
    ?.find((announcement) => announcement.id === props.id);
  const comboboxAnchor = useComboboxAnchor();
  const { mutate: addAnnouncement } = useAddAnnouncement();
  const { mutate: editAnnouncement } = useEditAnnouncement();

  const form = useForm<AnnouncementSchemaType>({
    resolver: zodResolver(announcementSchema),
    defaultValues: {
      title: announcementToEdit?.title ?? '',
      content: announcementToEdit?.content ?? '',
      publicationDate: announcementToEdit
        ? format(
            new Date(announcementToEdit.publicationDate),
            PUB_DATE_INPUT_FORMAT
          )
        : '',
      categoryNames:
        announcementToEdit?.categoryIds.map(
          (cid) => categories.find((c) => c.id === cid.id)?.name
        ) ?? [],
    },
  });

  function onSubmit(values: AnnouncementSchemaType) {
    if (announcementToEdit) {
      editAnnouncement({ ...values, id: props.id! });
    } else {
      addAnnouncement(values);
    }
  }

  return !announcementToEdit && !!props.id ? (
    <>Announcement not found!</>
  ) : (
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
                <Input placeholder={PUB_DATE_INPUT_FORMAT} {...field} />
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
