import { AnyAction } from 'redux';
import { SidebarItem } from '../../../types/Api';
import { RootState } from '../store';

export const sendMessage = (text: string) => ({
  type: 'messenger/sendMessage',
  text,
});

export type TMessage = {
  id: number;
  sender: number;
  text: string;
};

export type MessengerState = {
  menu: Array<SidebarItem>;
  messages: Array<TMessage>;
};

const initialState: MessengerState = {
  menu: [
    { id: 0, to: '/1', text: 'Алексей Захаров' },
    { id: 1, to: '/1', text: 'Петя Беляшёв' },
    { id: 2, to: '/1', text: 'Айсен Николаев' },
    { id: 3, to: '/1', text: 'Сергей Мальцев' },
    { id: 4, to: '/1', text: 'Николай Колесов' },
  ],
  messages: [
    { id: 0, sender: 0, text: 'Hi' },
    { id: 1, sender: 1, text: "I'm glad to see you" },
    { id: 2, sender: 0, text: "We'll go to the gym tomorrow" },
  ],
};

export const getMenu = (state: RootState) => state.messenger.menu;
export const getMessages = (state: RootState) => state.messenger.messages;

export const messengerReducer = (
  state: MessengerState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case 'messenger/sendMessage':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            sender: Math.round(Math.random()),
            text: action.text,
          },
        ],
      };

    default:
      return state;
  }
};
