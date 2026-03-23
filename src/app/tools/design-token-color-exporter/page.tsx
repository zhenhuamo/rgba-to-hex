import { metadata } from './metadata';
import DesignTokenColorExporterClient from './client';

export { metadata };

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getFirstParamValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default async function DesignTokenColorExporterPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  return (
    <DesignTokenColorExporterClient
      initialSource={getFirstParamValue(resolvedSearchParams?.source)}
      initialTokenName={getFirstParamValue(resolvedSearchParams?.tokenName)}
      initialScale={getFirstParamValue(resolvedSearchParams?.scale)}
      initialRoles={getFirstParamValue(resolvedSearchParams?.roles)}
    />
  );
}
