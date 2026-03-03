using NUnit.Framework;
using Math.Services;

namespace Math.UnitTests.Services
{
    [TestFixture]
    public class PrimeService_IsPrimeShould
    {
        private MathService _mathService;

        [SetUp]
        public void SetUp()
        {
            _mathService = new MathService();
        }

        [Test]
        public void IsPrime_InputIs1_ReturnFalse()
        {
            var result = _mathService.IsPrimeNumber(1);

            Assert.That(result, Is.False, "1 should not be prime");
        }
    }
}