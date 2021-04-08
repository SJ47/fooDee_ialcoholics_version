package com.ialcoholic.foodees.foodee_service.repositories.menu;

import com.ialcoholic.foodees.foodee_service.models.menu.HotDrink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotDrinkRepository extends JpaRepository<HotDrink, Long> {

}
