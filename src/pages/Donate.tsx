import { useState } from "react";
import Icon from "@/components/ui/icon";

const Donate = () => {
  const [amount, setAmount] = useState(1000);
  const presetAmounts = [500, 1000, 2500, 5000];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Помочь животным
          </h1>
          <p className="text-xl text-gray-600">Ваша поддержка спасает жизни</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">
              Сделать пожертвование
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Сумма пожертвования
              </label>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`p-3 rounded-md border-2 transition-colors ${
                      amount === preset
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {preset.toLocaleString()} ₽
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full p-3 border border-gray-200 rounded-md"
                placeholder="Другая сумма"
              />
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center text-lg font-semibold">
              <Icon name="Heart" size={20} className="mr-2" />
              Пожертвовать {amount.toLocaleString()} ₽
            </button>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Безопасная оплата через защищенное соединение
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Icon
                  name="DollarSign"
                  size={20}
                  className="text-green-600 mr-2"
                />
                <h3 className="font-semibold">На что идут средства</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Корм и медицинская помощь</li>
                <li>• Содержание приютов</li>
                <li>• Программы стерилизации</li>
                <li>• Поиск новых домов</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Icon name="Shield" size={20} className="text-green-600 mr-2" />
                <h3 className="font-semibold">Прозрачность</h3>
              </div>
              <p className="text-gray-600">
                Мы публикуем отчеты о расходовании средств каждый месяц. 95%
                пожертвований идет напрямую на помощь животным.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Icon name="Users" size={20} className="text-green-600 mr-2" />
                <h3 className="font-semibold">Стать волонтером</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Помочь можно не только деньгами. Присоединяйтесь к нашей
                команде!
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium">
                Узнать больше →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
