import * as Sentry from '@sentry/nextjs';
import NextErrorComponent, { ErrorProps as NextErrorProps } from 'next/error';
import { NextPageContext } from 'next';

export type ErrorPageProps = {
  statusCode: number
};

export type ErrorProps = {
  isReadyToRender: boolean
} & NextErrorProps;

const CustomErrorComponent = (props: ErrorPageProps): JSX.Element => {
  const { statusCode } = props;
  return <NextErrorComponent statusCode={statusCode} />;
};

CustomErrorComponent.getInitialProps = async (contextData: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(contextData);

  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;
