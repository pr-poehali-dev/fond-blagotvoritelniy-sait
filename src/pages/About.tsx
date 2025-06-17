import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            О нашем фонде
          </h1>
          <p className="text-xl text-gray-600">
            Мы защищаем права животных и помогаем им найти дом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Icon name="Target" size={24} className="text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold">Наша миссия</h2>
            </div>
            <p className="text-gray-600">
              Создать мир, где каждое животное живет в безопасности, получает
              заботу и любовь, которую заслуживает.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Icon name="Eye" size={24} className="text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold">Наше видение</h2>
            </div>
            <p className="text-gray-600">
              Общество, где жестокость к животным искоренена, а взаимоотношения
              между людьми и животными основаны на уважении.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Наши достижения
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Спасенных животных</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">300+</div>
              <div className="text-gray-600">Новых домов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Волонтеров</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
