export interface ArticlePreviewModel {
  image: string;
  header: string;
  description: string;
  buttons: Array<{text: string, url: string}>;
}
