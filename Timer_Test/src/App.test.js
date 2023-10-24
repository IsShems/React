import React from 'react';
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import Timer from './App'; 

describe('Timer component', () => {
    it('renders without errors with initial time', () => {
      render(<Timer />);
      const timerElement = screen.getByText(/Осталось 60 секунд/i);
      expect(timerElement).toBeTruthy();
    });
  
    it('decreases time by 1 each second when started', async () => {
        render(<Timer />);
        const startButton = screen.getByText(/Start/i);
        act(() => {
          fireEvent.click(startButton);
        });
      
        await waitFor(
          () => {
            const timerElement = screen.queryByText(/Осталось 59 секунд/i);
            expect(timerElement).toBeTruthy();
          },
          { timeout: 1500 } 
        );
      });
      
  
    it('pauses the timer when Pause button is clicked', async () => {
      render(<Timer />);
      const startButton = screen.getByText(/Start/i);
      act(() => {
        fireEvent.click(startButton);
      });
      const pauseButton = screen.getByText(/Pause/i);
      act(() => {
        fireEvent.click(pauseButton);
      });
      const timerElement = screen.getByText(/Осталось 60 секунд/i);
      expect(timerElement).toBeTruthy();
    });
  
    it('resets the timer to initial time when Reset button is clicked', async () => {
      render(<Timer />);
      const startButton = screen.getByText(/Start/i);
      act(() => {
        fireEvent.click(startButton);
      });
      const resetButton = screen.getByText(/Reset/i);
      act(() => {
        fireEvent.click(resetButton);
      });
      const timerElement = screen.getByText(/Осталось 60 секунд/i);
      expect(timerElement).toBeTruthy();
    });
  });
