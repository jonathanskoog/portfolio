import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Logo } from "./Logo.jsx";

import "./Navbar.css";

import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //lägg till check för om mobile då göm nav annars inte

  const menuItems = ["Home", "About", "Projects"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={true}
      shouldHideOnScroll
      // style={{ backgroundColor: "#F5F5F7" }}
      maxWidth={"full"}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mobile-logo">
          <div
            onClick={() => {
              // console.log("NavbarBrand clicked");
              document
                .getElementsByClassName("center")[0]
                .scrollIntoView({ behavior: "smooth" }); // Scroll to the top of the page
            }}
            className="hover-cursor"
          >
            <div className="logo">
              <Logo />
            </div>
            <p>JS</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive style={{ cursor: "pointer" }}>
          <Link
            color={"foreground"}
            underline="hover"
            // aria-current="page"
            onPress={
              () =>
                document
                  .getElementsByClassName("center")[0]
                  .scrollIntoView({ behavior: "smooth" }) 
            }
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem style={{ cursor: "pointer" }}>
          {/* fixa så kan klicka o ändra färg med isactive */}
          <Link
            color="foreground"
            underline="hover"
            onClick={() => {
              document
                .getElementsByClassName("header")[0]
                .scrollIntoView({ behavior: "smooth" }); 
            }}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem style={{ cursor: "pointer" }}>
          <Link
            color="foreground"
            // href="#"
            underline="hover"
          >
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            style={{ marginBottom: "0.5rem" }}
          >
            <Link
              color="foreground"
              underline="hover"
              className="w-full"
              href="#"
              size="lg"
              style={{
                fontFamily:
                  "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: "#1d1d1f",
                lineHeight: "2rem",
                fontSize: "1.75rem",
              }}
              onPress={
                () =>
                  document
                    .getElementsByClassName(
                      index === 0
                        ? "center"
                        : index === 1
                        ? ""
                        : index === 2
                        ? ""
                        : "center"
                    )[0]
                    .scrollIntoView({ behavior: "smooth" }) // Scroll to the top of the page, ändra till att scrolla till rätt sektion
              }
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navbars;
