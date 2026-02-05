'use client';

import React, { useEffect } from 'react';
import { getMetaData } from '../../lib/seo';

interface SEOProps {
  site: string;
  slug?: string | null;
  post?: any;
}

export const SEO: React.FC<SEOProps> = ({ site, slug, post }) => {
  useEffect(() => {
    const meta = getMetaData(site, slug || undefined, post);
    document.title = meta.title;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', meta.description);
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', meta.keywords);
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) existingSchema.remove();
    if (meta.schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(meta.schema);
      document.head.appendChild(script);
    }
  }, [site, slug, post]);
  return null;
};