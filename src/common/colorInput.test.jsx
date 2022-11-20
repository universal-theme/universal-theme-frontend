import { render, screen } from "@testing-library/react";
import { ColorInput } from "./colorInput";

describe("ColorInput", () => {
    it("should show the correct label", () => {
        const labelText = "My label";
        render(<ColorInput label={labelText} />);
        expect(screen.getByText(labelText)).toBeVisible()
    });

    it("should associate the label with the input", () => {
        const labelText = "My label";
        render(<ColorInput name="my-color" label={labelText} />);
        expect(screen.getByLabelText(labelText)).toBeVisible()
    });

    it.todo("should show the correct default value");
});
