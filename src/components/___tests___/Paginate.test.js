import { render, screen } from "@testing-library/react";
import Paginate from "../Paginate/Paginate";

// we can test all other components using various tests

// Testing the paginate component
test("should render paginate component", () => {
	render(<Paginate />);
	const paginateElement = screen.getByTestId("paginate-1");
	expect(paginateElement).toBeInTheDocument();
});
