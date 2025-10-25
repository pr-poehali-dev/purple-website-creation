import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  price: string;
}

const PaymentModal = ({ isOpen, onClose, packageName, price }: PaymentModalProps) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'qiwi' | 'yoomoney'>('card');
  const { toast } = useToast();

  const handlePayment = () => {
    if (!nickname || !email) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Перенаправление на оплату',
      description: `Открываем форму оплаты ${packageName} за ${price}`,
    });

    setTimeout(() => {
      onClose();
      setNickname('');
      setEmail('');
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} className="text-primary" />
            Покупка {packageName}
          </DialogTitle>
          <DialogDescription className="text-base">
            Заполните данные для оформления привилегии
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="nickname" className="text-base">
              Игровой ник <span className="text-destructive">*</span>
            </Label>
            <Input
              id="nickname"
              placeholder="Steve123"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="border-primary/30 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-primary/30 focus:border-primary"
            />
            <p className="text-xs text-muted-foreground">
              На этот email придёт чек об оплате
            </p>
          </div>

          <div className="space-y-3">
            <Label className="text-base">Способ оплаты</Label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  paymentMethod === 'card'
                    ? 'border-primary bg-primary/10'
                    : 'border-primary/30 hover:border-primary/50'
                }`}
              >
                <Icon name="CreditCard" size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Карта</p>
              </button>

              <button
                onClick={() => setPaymentMethod('qiwi')}
                className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  paymentMethod === 'qiwi'
                    ? 'border-primary bg-primary/10'
                    : 'border-primary/30 hover:border-primary/50'
                }`}
              >
                <Icon name="Wallet" size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">QIWI</p>
              </button>

              <button
                onClick={() => setPaymentMethod('yoomoney')}
                className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  paymentMethod === 'yoomoney'
                    ? 'border-primary bg-primary/10'
                    : 'border-primary/30 hover:border-primary/50'
                }`}
              >
                <Icon name="Coins" size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">ЮMoney</p>
              </button>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Привилегия:</span>
              <span className="font-semibold">{packageName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">К оплате:</span>
              <span className="text-2xl font-bold text-primary">{price}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-primary/30 hover:bg-primary/10"
            >
              Отмена
            </Button>
            <Button
              onClick={handlePayment}
              className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
            >
              <Icon name="Lock" size={16} className="mr-2" />
              Оплатить {price}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Нажимая "Оплатить", вы соглашаетесь с{' '}
            <span className="text-primary cursor-pointer hover:underline">
              условиями оферты
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
