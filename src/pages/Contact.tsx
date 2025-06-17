import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600">Мы всегда готовы помочь</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Написать нам</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Как мы можем помочь?"
                ></textarea>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Icon name="MapPin" size={20} className="text-green-600 mr-3" />
                <h3 className="font-semibold">Адрес</h3>
              </div>
              <p className="text-gray-600">
                ул. Добрая, 15
                <br />
                Москва, 123456
                <br />
                Россия
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Icon name="Phone" size={20} className="text-green-600 mr-3" />
                <h3 className="font-semibold">Телефон</h3>
              </div>
              <p className="text-gray-600">
                +7 (495) 123-45-67
                <br />
                <span className="text-sm">Ежедневно с 9:00 до 18:00</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Icon name="Mail" size={20} className="text-green-600 mr-3" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-gray-600">
                info@dobryelapy.ru
                <br />
                help@dobryelapy.ru
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Icon name="Clock" size={20} className="text-green-600 mr-3" />
                <h3 className="font-semibold">Экстренная помощь</h3>
              </div>
              <p className="text-gray-600">
                Если животному нужна срочная помощь:
                <br />
                <span className="font-semibold text-red-600">
                  +7 (495) 911-11-11
                </span>
                <br />
                <span className="text-sm">Круглосуточно</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
