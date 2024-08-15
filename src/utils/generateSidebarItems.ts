import { SidbarItem, TRoles } from "@/types/common";
import { userRoles } from "./roles";

export const sidebarItems = (role: TRoles): SidbarItem[] => {
    const roleMenus: SidbarItem[] = []

    switch (role) {
        case userRoles.ADMIN:
            roleMenus.push({
                title: "Dashboard",
                path: `/${role}`
            }),
                roleMenus.push({
                    title: "Manage Rents",
                    path: `/${role}/manage-rents`
                }),
                roleMenus.push({
                    title: "Manage Sells",
                    path: `/${role}/manage-sells`
                })
            break

        case userRoles.SELLER:
            roleMenus.push({
                title: "Dashboard",
                path: `/${role}`
            }),
                roleMenus.push({
                    title: "Create Listing",
                    path: `/${role}/create-listing`
                }),
                roleMenus.push({
                    title: "Manage Properties",
                    path: `/${role}/manage-property`
                })
                roleMenus.push({
                    title: "Manage Sales",
                    path: `/${role}/manage-sales`
                })
                roleMenus.push({
                    title: "My Profile",
                    path: `/${role}/manage-profile`
                })
            break
        case userRoles.BUYER:
            roleMenus.push({
                title: "Dashboard",
                path: `/${role}`
            }),
                roleMenus.push({
                    title: "My Buys",
                    path: `/${role}/my-buys`
                }),
                roleMenus.push({
                    title: "My Profile",
                    path: `/${role}/manage-profile`
                })
            break
        default:
            break;

    }
    return [...roleMenus]
}