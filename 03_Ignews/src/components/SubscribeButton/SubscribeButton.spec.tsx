import { fireEvent, render, screen } from '@testing-library/react';
import { SubscribeButton } from './Index';
import { signIn, useSession } from 'next-auth/react';
import { mocked } from 'jest-mock';
import { useRouter } from 'next/router';

jest.mock('next-auth/react');
jest.mock('next/router');

describe('SubscribeButton component', () => {
    it('renders correctly', () => {
        const useSessionMocked = mocked(useSession);

        useSessionMocked.mockReturnValueOnce({data: null, status: 'unauthenticated'});

        render(<SubscribeButton />);

        expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
    })

    it('redirects user to sign in when not authenticated', () => {
        const useSessionMocked = mocked(useSession);

        useSessionMocked.mockReturnValueOnce({data: null, status: 'unauthenticated'});

        const signInMocked = mocked(signIn);

        render(<SubscribeButton />);

        const subscribeButton = screen.getByText('Subscribe Now');

        fireEvent.click(subscribeButton);

        expect(signInMocked).toHaveBeenCalled();
    })

    it('redirects to posts when user already has a subscription', () => {
        const useRouterMocked = mocked(useRouter);
        const useSessionMocked = mocked(useSession);
        const pushMock = jest.fn();

        useSessionMocked.mockReturnValue({data: { 
            user: { name: 'John Doe', email: 'jdoe@example.com'},
            activeSubscription: 'fake-active-subscription',
            expires: 'fake-expires'
        }, status: 'authenticated'})

        useRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as any);

        render(<SubscribeButton />);

        const subscribeButton = screen.getByText('Subscribe Now');

        fireEvent.click(subscribeButton);

        expect(pushMock).toHaveBeenCalledWith('/posts');
    })
})