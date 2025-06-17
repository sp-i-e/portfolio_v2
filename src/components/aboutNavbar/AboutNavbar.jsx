import FileItem from "./FileItem";
import FolderItem from "./FolderItem";

export default function AboutNavbar({ data, className }) {
  return (
    <ul className={className}>
      {data?.map((item, index) => (
        <li key={`nav-item-${index + 1}`}>
          {item?.type === "file" && <FileItem item={item} />}
          {item?.type === "folder" && <FolderItem item={item} />}
        </li>
      ))}
    </ul>
  );
}
