import { AuthLayout } from '@/components/layouts';
import { useTranslation } from 'next-i18next';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPageWithLayout } from 'types';

const SearchTeam: NextPageWithLayout = () => {
  const { t } = useTranslation('common');
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-medium">{t('no-team-heading')}</h2>
      <p>{t('no-team-description')}</p>
    </div>
  );
};

SearchTeam.getLayout = (page: React.ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
};

export default SearchTeam;
