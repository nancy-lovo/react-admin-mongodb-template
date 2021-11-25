import { sendFormData } from "../httpClient";

export const uploadImgFile = async (
  resource: string,
  resourceId: string,
  file: any,
  onUploadProgress: (progressEvent: any) => void
): Promise<any> => {
  let formData = new FormData();

  formData.append("image", file);

  return await sendFormData(resource, resourceId, formData, onUploadProgress);
};
