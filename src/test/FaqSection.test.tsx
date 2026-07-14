import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { FaqSection } from '../components/FaqSection';

describe('FaqSection Component Lifecycle', () => {
    it('should render the main header title on the screen', () => {
        render(<FaqSection />);
        const heading = screen.getByRole('heading', { name: /Frequently Addressed Inquiries/i });
        expect(heading).toBeInTheDocument();
    });

    it('should start with accordion content hidden inside the closed state tray', () => {
        render(<FaqSection />);
        // 1. Get the actual content container paragraph element
        const contentParagraph = screen.getByText(/Most standard pipelines can migrate onto our system engine/i);

        // 2. Find its outer wrapper div layer
        const accordionWrapper = contentParagraph.closest('div');

        // 3. Verify it contains Tailwind's closed height initialization utility rule class
        expect(accordionWrapper).toHaveClass('max-h-0');
    });

    it('should smoothly toggle open and display hidden text when clicked by a user', async () => {
        render(<FaqSection />);
        const user = userEvent.setup();

        // Target the first interactive accordion button trigger
        const faqButton = screen.getByRole('button', { name: /How long does migration take\?/i });
        await user.click(faqButton);

        // After user interaction click event triggers state mutation, text should be completely visible
        const revealedContent = screen.getByText(/Most standard pipelines can migrate onto our system engine/i);
        expect(revealedContent).toBeVisible();
    });
});