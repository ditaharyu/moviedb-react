import Homepage from '../App.tsx'
import DetailMovie from '../views/Details.tsx'

export const menuOptions = [
  {
      text: "Homepage",
      path: "/",
      element: <Homepage />,
  },
  {
      text: "Detail",
      path: "/movie/:id",
      element: <DetailMovie />,
  },
]