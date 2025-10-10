import type { Dispatch, SetStateAction } from 'react';

export interface IMeetingLink {
  setClose: Dispatch<SetStateAction<boolean>>;
  link: string;
  email: string;
}