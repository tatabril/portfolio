import { Card, CardContent } from '@/shared/ui/card';
import { AlertCircle } from 'lucide-react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center justify-center">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-red-500">
              {t('notFound.title')}
            </h1>
          </div>
          <div className="text-sm text-muted-foreground flex flex-col items-center gap-2">
            <div>{t('notFound.description')}</div>
            <Link
              to="/"
              className="flex items-center justify-center w-40 px-4 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {t('notFound.button')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
