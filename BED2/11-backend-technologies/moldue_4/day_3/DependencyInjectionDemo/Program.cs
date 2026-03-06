
using Autofac;
using DependencyInjection.Contracts;
using DependencyInjection.Services;

namespace DependencyInjectionDemo;

class Program
{
    static void Main(string[] args)
    {
        var builder = new ContainerBuilder();

        builder
            .RegisterType<NotificationService>()
            .As<INotificationService>()
            .SingleInstance();

        builder
            .RegisterType<MessageService>()
            .As<IMessageService>()
            .SingleInstance();

        builder
            .RegisterType<LoggerService>()
            .As<ILoggerService>()
            .SingleInstance();

        var container = builder.Build();

        var notificationService = container.Resolve<INotificationService>();

        notificationService.Notify("Hello dependency injection! (trough Notification Service)");
    }
}