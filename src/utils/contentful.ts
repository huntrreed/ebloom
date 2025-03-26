import { createClient } from 'contentful';

const client = createClient({
  space: "8jygecfjg6w0",
  accessToken: "7GVIsy-Ni30iOf3pwLpjBw_fJFCYpT_K5buqed5wL-g",
});

// Fetch Products for Store Page
export async function getProducts() {
  try {
    const response = await client.getEntries({
      content_type: "product",
      include: 2
    });

    return response.items.map((item) => ({
      title: item.fields.title,
      price: item.fields.price || 0,
      inStock: item.fields.inStock === true,
      slug: item.fields.slug || "missing-slug",
      category: typeof item.fields.category === 'string' ? item.fields.category.toLowerCase() : "all",
      description: item.fields.description || "",
      images: Array.isArray(item.fields.imageUrl)
        ? item.fields.imageUrl.map((img: any) => img?.fields?.file?.url ? `https:${img.fields.file.url}` : "").filter(Boolean)
        : [],
    }));
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  const products = await getProducts();
  return products.find(product => product.slug === slug);
}



// Fetch Gallery Items for Gallery Page
export async function getGalleryItems() {
    const entries = await client.getEntries({ content_type: 'galleryItem' });

    return entries.items.map(item => ({
      title: item.fields.title,
      category: item.fields.category,
      images: Array.isArray(item.fields.imageurl) ? item.fields.imageurl.map((img: any) => img && img.fields && img.fields.file ? img.fields.file.url : '') : [],
      tags: item.fields.tags || [],
    }));
}
