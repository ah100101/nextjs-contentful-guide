'use client';

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

export function ContentfulPreviewProvider({
  children,
}) {
  return (
    <ContentfulLivePreviewProvider locale={'en-US'}>
      {children}
    </ContentfulLivePreviewProvider>
  );
}