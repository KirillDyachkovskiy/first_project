import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ComponentType } from 'react';
import { getUserData } from '../services/redux/reducer/authReducer';
import { TState } from '../services/redux/store';
import { AuthData } from '../types/Api';

export default function withRedirect<T>(WrappedComponent: ComponentType<T>) {
  type TStateProps = {
    authedUser: AuthData;
  };

  const mapStateToProps = (state: TState) => ({
    authedUser: getUserData(state),
  });

  function RedirectedComponent({ authedUser, ...props }: TStateProps) {
    if (authedUser.id) {
      return <WrappedComponent {...(props as T)} />;
    }

    return <Navigate to='/login' />;
  }

  return connect<TStateProps, undefined, undefined, TState>(mapStateToProps)(
    RedirectedComponent
  );
}
