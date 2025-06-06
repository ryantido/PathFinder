import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../app/login/page';
import { useAuthStore } from '../hooks/authStore';

jest.mock('../lib/axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: { user: { id: '1', email: 'test@example.com', name: 'Test', role: 'USER' } } }))
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

describe('LoginPage', () => {
  beforeEach(() => {
    useAuthStore.setState({ user: null, loading: false, error: null });
  });

  it('affiche le formulaire de connexion', () => {
    render(<LoginPage />);
    expect(screen.getByText(/Connexion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mot de passe/i)).toBeInTheDocument();
  });

  it('affiche une erreur si email invalide', async () => {
    render(<LoginPage />);
    fireEvent.input(screen.getByLabelText(/Email/i), { target: { value: 'bademail' } });
    fireEvent.input(screen.getByLabelText(/Mot de passe/i), { target: { value: '123456' } });
    fireEvent.submit(screen.getByRole('button', { name: /Se connecter/i }));
    await waitFor(() => {
      expect(screen.getByText(/Email invalide/i)).toBeInTheDocument();
    });
  });

  it('envoie le formulaire et connecte l\'utilisateur', async () => {
    render(<LoginPage />);
    fireEvent.input(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.input(screen.getByLabelText(/Mot de passe/i), { target: { value: '123456' } });
    fireEvent.submit(screen.getByRole('button', { name: /Se connecter/i }));
    await waitFor(() => {
      expect(useAuthStore.getState().user?.email).toBe('test@example.com');
    });
  });
});
