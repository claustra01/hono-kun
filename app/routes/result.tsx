import { createRoute } from "honox/factory";
import Result from "../islands/Result";
import { filterMiddleware } from "../middlewares/filter";

export default createRoute(filterMiddleware, (c) => {
	return c.render(<Result />);
});
