import { ChevronsLeft } from "lucide-react";

const Header = ({
  headerText,
  icon,
}: {
  headerText: string;
  icon?: React.ReactNode;
}) => {
  console.log(icon);
  return (
    <h2 className="heading  text-center mx-auto rounded-lg  flex items-center gap-2 justify-center">
      {headerText}
      {icon !== "0" && <ChevronsLeft className="size-8 " />}
    </h2>
  );
};

export default Header;
