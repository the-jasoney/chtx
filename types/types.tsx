import { AppProps } from 'next/app';
import { NextComponentType, NextPage } from 'next';

export type NextCompWithTitle = NextComponentType & {
  title: string;
};

export type Props = Omit<AppProps, "Component"> & {
  Component: NextCompWithTitle;
};

export type NextPageWithTitle = NextPage & {
  title: string;
}