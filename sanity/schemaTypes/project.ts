import { defineField, defineType } from "sanity";
import { BiPackage } from "react-icons/bi";

export default defineType({
	name: "project",
	title: "Project",
	type: "document",
	icon: BiPackage,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			description: "Enter the name of the project",
		}),
		defineField({
			name: "tagline",
			title: "Tagline",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			description:
				"Add a custom slug for the URL or generate one from the name",
			options: { source: "title", maxLength: 96 },
		}),
		defineField({
			name: "logo",
			title: "Project Logo",
			type: "image",
		}),
		defineField({
			name: "mainImage",
			title: "Main Image",
			type: "image",
			description: "Upload a cover image for this project",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Alternative Text",
					type: "string",
				},
			],
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		}),
		defineField({
			name: "createdAt",
			title: "Created at",
			type: "datetime",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "blockContent",
		}),
		defineField({
			name: "description2",
			title: "Description2",
			type: "blockContent",
		}),
		defineField({
			name: "quote",
			title: "Quote",
			type: "blockContent",
		}),
	],
});
