import { User } from "@/model/randomData";

const filterList = (list: User[], searchTerm: string) => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return list.filter((user) => {
    return Object.values(user).some((value) => {
      if (
        typeof value === "string" &&
        value.toLowerCase().includes(lowerCaseSearchTerm)
      ) {
        return true;
      } else if (typeof value === "object" && value !== null) {
        return Object.values(value).some(
          (nestedValue) =>
            typeof nestedValue === "string" &&
            nestedValue.toLowerCase().includes(lowerCaseSearchTerm)
        );
      }
      return false;
    });
  });
};

self.addEventListener("message", (event) => {
  const { list, filterTerm } = event.data;

  const filteredList = filterList(list, filterTerm);

  self.postMessage(filteredList);
});
