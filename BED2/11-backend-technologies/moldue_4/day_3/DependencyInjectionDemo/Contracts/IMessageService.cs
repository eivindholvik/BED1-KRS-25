namespace DependencyInjection.Contracts;

public interface IMessageService
{
    void Send(string message);
}