package tech.getarrays.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.employeemanager.model.Employee;

import java.util.Optional;

/**
 * JpaRepository: allow us to get all functionality that we need to complete our operation.
 * This is a generic, that means he take the class that will be handled and also his ID.
 * In our case it this a class Employee with his ID(already exits in the database)
 *
 * Optional: allow us to do something else(Display a message for example) if the parsing parameter was not found.
 */

public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    void deleteEmployeeById(Long id);

    Optional<Employee> findEmployeeById(Long id);
}
