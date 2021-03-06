const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/attendance", component: () => import("pages/Attendance.vue") },
      { path: "/", component: () => import("pages/BasicStudent.vue") },
      { path: "/group", component: () => import("pages/GroupLead.vue") },
      { path: "/series", component: () => import("pages/SeriesLead.vue") },
      { path: "/config1", component: () => import("pages/Configurator1.vue") },
      { path: "/config", component: () => import("pages/Configurator.vue") }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/AuthLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
