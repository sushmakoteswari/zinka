export interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItemWithSubMenu {
  title: string;
  hasSubMenu: true;
  subMenuItems: SubMenuItem[];
  partiallyActive?: boolean;
}

interface MenuItemWithoutSubMenu {
  title: string;
  href: string;
  hasSubMenu: false;
  partiallyActive?: boolean;
}

export type MenuItem = MenuItemWithSubMenu | MenuItemWithoutSubMenu;

export const MenuData: MenuItem[] = [
  {
    title: "Home",
    href: "/",
    hasSubMenu: false,
  },
  {
    title: "About Us",
    href: "/#about",
    hasSubMenu: false,
  },
  {
    title: "Essential Programmes",
    hasSubMenu: true,
    subMenuItems: [
      {
        title: "Business Analytics",
        href: "/course/business_analytics",
      },
      {
        title: "Digital Marketing",
        href: "/course/digital_marketing",
      },
      {
        title: "Human Resource Management",
        href: "/course/human_resource_management",
      },
      {
        title: "Strategic Management",
        href: "/course/strategic_management",
      },
      {
        title: "Entrepreneurship  ",
        href: "/course/entrepreneurship",
      },
      {
        title: "Finance",
        href: "/course/finance",
      },
      {
        title: "Project Management",
        href: "/course/project_management",
      },
    ],
  },
  {
    title: "Industry Ready Program",
    href: "/IndustryReadyProgram",
    hasSubMenu: false,
  },
  {
    title: "Contact Us",
    href: "/#contact",
    hasSubMenu: false,
  },
];
