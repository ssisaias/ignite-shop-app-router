export interface ServerPageParamProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}