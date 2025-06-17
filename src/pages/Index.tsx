import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-800"
          >
            🐾 Фонд защиты животных
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Спасаем и защищаем <br />
            <span className="text-green-600">наших четвероногих друзей</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Мы — команда неравнодушных людей, которая каждый день работает ради
            спасения бездомных животных. Наша миссия — дать каждому питомцу шанс
            на счастливую жизнь в любящей семье.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Icon name="Heart" className="mr-2" size={20} />
              Помочь животным
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Users" className="mr-2" size={20} />
              Стать волонтером
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center border-green-200">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-green-600 mb-2">
                1,247
              </div>
              <p className="text-gray-600">Спасённых животных</p>
              <Icon
                name="Dog"
                className="mx-auto mt-3 text-green-500"
                size={32}
              />
            </CardContent>
          </Card>

          <Card className="text-center border-green-200">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-green-600 mb-2">892</div>
              <p className="text-gray-600">Нашли дом</p>
              <Icon
                name="Home"
                className="mx-auto mt-3 text-green-500"
                size={32}
              />
            </CardContent>
          </Card>

          <Card className="text-center border-green-200">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-green-600 mb-2">156</div>
              <p className="text-gray-600">Активных волонтеров</p>
              <Icon
                name="HandHeart"
                className="mx-auto mt-3 text-green-500"
                size={32}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Наша миссия
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4">
                <Icon name="Shield" className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Защита и спасение
                  </h3>
                  <p className="text-gray-600">
                    Находим и спасаем животных, попавших в беду
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Heart" className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Забота и лечение
                  </h3>
                  <p className="text-gray-600">
                    Обеспечиваем медицинскую помощь и уход
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Users" className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Поиск семьи
                  </h3>
                  <p className="text-gray-600">
                    Помогаем найти любящий дом для каждого питомца
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon
                  name="BookOpen"
                  className="text-green-600 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Просвещение
                  </h3>
                  <p className="text-gray-600">
                    Учим ответственному отношению к животным
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
