import GameLayout from "@/pages/Admin/pages/Game";
import GamesLayout from "@/pages/Admin/pages/games/Layout";
import Memory from "@/pages/Admin/pages/games/Memory";
import MemoryEngine from "@/pages/Admin/pages/games/MemoryCardEngine/MemoryEngine";
import React, { lazy } from "react";
import { AdminRequiredAuth, NormalRequiredAuth } from "../containers";
const Admin = lazy(() => import("../pages/Admin/index"));
const DashboardLayout = lazy(() => import("../pages/Admin/layouts/dashboard"));
const DashboardApp = lazy(() => import("../pages/Admin/pages/DashboardApp"));
const User = lazy(() => import("../pages/Admin/pages/User"));
const Kycs = lazy(() => import("../pages/Admin/pages/Kycs"));
const Login = lazy(() => import("../pages/Admin/pages/Login"));
const Register = lazy(() => import("../pages/Admin/pages/Register"));
const PrizeList = lazy(() => import("../pages/Admin/pages/prize/PrizeList"));
const PrizeForm = lazy(() => import("../pages/Admin/pages/prize/Form"));
const Transactions = lazy(() => import("../pages/Admin/pages/transactions/List"));

export const admin = [
  {
    path: "triip-admin",
    element: (
      <NormalRequiredAuth>
        <Admin />
      </NormalRequiredAuth>
    ),
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "app",
            element: (
              <AdminRequiredAuth>
                <DashboardApp />
              </AdminRequiredAuth>
            )
          },

          {
            path: "user",
            element: (
              <AdminRequiredAuth>
                <User />
              </AdminRequiredAuth>
            )
          },

          {
            path: "kyc",
            element: (
              <AdminRequiredAuth>
                <Kycs />
              </AdminRequiredAuth>
            )
          },
          {
            path: "game",
            element: (
              <AdminRequiredAuth>
                <GameLayout />
              </AdminRequiredAuth>
            ),
            children: [
              {
                index: true,
                element: <GamesLayout />
              },
              {
                path: "memory-card-engine",
                element: <MemoryEngine />
              }
            ]
          },

          {
            path: "login",
            element: (
              <AdminRequiredAuth>
                <Login />
              </AdminRequiredAuth>
            )
          },

          {
            path: "register",
            element: <Register />
          },

          {
            path: "prizes",
            element: (
              <AdminRequiredAuth>
                <PrizeList />
              </AdminRequiredAuth>
            )
          },
          {
            path: "prizes/new",
            element: (
              <AdminRequiredAuth>
                <PrizeForm />
              </AdminRequiredAuth>
            )
          },
          {
            path: "transactions",
            element: (
              <AdminRequiredAuth>
                <Transactions />
              </AdminRequiredAuth>
            )
          }
        ]
      }
    ]
  }
];
