import React from 'react';
import Head from 'next/head';

import toJson from '../utils/toJson';

export interface JsonLdProps {
  type: string;
  keyOverride?: string;
  scriptId?: string;
}

function JsonLd({
  type,
  keyOverride,
  scriptKey,
  scriptId = undefined,
  ...rest
}: JsonLdProps & { scriptKey: string }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        id={scriptId}
        dangerouslySetInnerHTML={toJson(type, { ...rest })}
        key={`jsonld-${scriptKey}${keyOverride ? `-${keyOverride}` : ''}`}
      />
    </Head>
  );
}

export { JsonLd };
