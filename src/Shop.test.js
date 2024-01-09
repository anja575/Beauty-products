import React from "react";
import Shop from "./Shop";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';


describe("Shop page test", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Shop />
            </BrowserRouter>
        );
    });

    test("test search bar is present", () => {
        const field = screen.getByPlaceholderText('Search products by name');
        expect(field).toBeInTheDocument();
    });
});
