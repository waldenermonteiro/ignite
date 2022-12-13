import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContent";

import SideBarNav from "./SiderbarNav";

export default function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    xl: false,
  });

  const { isOpen, onClose } = useSidebarDrawer();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={"gray.800"} p="4">
            <DrawerCloseButton mt={"6"} />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w={"64"} mr="8">
      <SideBarNav />
    </Box>
  );
}
