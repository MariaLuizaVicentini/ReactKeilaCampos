import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function NavBar() {
  let secoes = [
    { titulo: "Inicio", link: "/"},
    { titulo: "Sobre", link: "/sobre"},
    { titulo: "Projetos", link: "/projetos"},
    { titulo: "Resultados", link: "/resultados"},
    { titulo: "Reels", link: "/reels"},
    { titulo: "Storie", link: "/storie"},
    { titulo: "Landing Pages", link: "/landingpages"},
    { titulo: "Design", link: "/design"},
    { titulo: "Contato", link: "/contato"},
  ]

  return (
    <div className="flex w-full items-center  justify-between p-4 shadow-xl">
        <div className="font-bold rounded-2xl p-2 text-purple-700 hover:bg-violet-200 ">
            <a href="/">
                Portifolio
            </a>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {secoes.map((secao) => (
                <NavigationMenuItem key={secao.titulo}> 
                  <NavigationMenuLink asChild>
                    <a href={secao.link} className={navigationMenuTriggerStyle()}>
                      {secao.titulo}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}
export default NavBar;