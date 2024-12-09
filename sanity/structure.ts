import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("ourcustomer").title("OurCustomers"),
      S.documentTypeListItem("contact").title("Contacts"),
      S.documentTypeListItem("ourservices").title("OurServices"),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("blogSignIn").title("Blog Sign In"),
      S.documentTypeListItem("academy").title("Academy"),
    ]);
