import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Pricing Component Billing Toggles', () => {
    it('should load into the viewport defaulting to monthly billing prices', () => {
        render(<App />);
        //  Render the actual main App layout engine
        const basePrice = screen.getByText('$29');
        expect(basePrice).toBeInTheDocument();
    });

    it('should reduce price arrays to display discounted annual tier terms when clicked', async () => {
        render(<App />);
        const user = userEvent.setup();

        //  Find the button using a partial match regex to ignore the child 
        const yearlyButton = screen.getByRole('button', { name: /Yearly Term/i });
        await user.click(yearlyButton);

        // Price output for Starter tier should drop from $29 down to the discounted $19 rate
        const discountedPrice = screen.getByText('$19');
        expect(discountedPrice).toBeInTheDocument();

        // Check that the old monthly price ($29) is no longer rendered as the primary rate text
        expect(screen.queryByText('$29')).not.toBeInTheDocument();
    });
});