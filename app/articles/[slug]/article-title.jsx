"use client";

import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { ContentfulLivePreview } from '@contentful/live-preview';

export default function ArticleTitle({ article }) {
  const updatedArticle = useContentfulLiveUpdates(article);
  return (
    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl" {...ContentfulLivePreview.getProps({
      entryId: article.sys.id,
      fieldId: 'title',
    })}>
      {updatedArticle.title}
    </h1>
  )
}