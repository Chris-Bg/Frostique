import { useMyRouter } from "@hooks/useMyRouter.js";
import { matchRoutes } from "@utils/path";

export function Routes({ children }) {
    // Obținem locația curentă
    const { location } = useMyRouter();

    // Căutăm ruta care se potrivește cu locația curentă
    const match = matchRoutes(children, location);


    // Întoarcem componenta care se potrivește cu locația curentă
    return <>{match}</>;
}