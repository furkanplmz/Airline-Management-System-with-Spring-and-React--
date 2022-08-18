package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="planeetbl")
public class Plane {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long PlaneId;
	@Column(name="planename")
	private String PlaneName;
	@Column(name="planeseats")
	private int PlaneSeats;
	
	public Plane() {
		
	}
	
	public Plane(String planeName, int planeSeats) {
		super();
		PlaneName = planeName;
		PlaneSeats = planeSeats;
	}

	public long getPlaneId() {
		return PlaneId;
	}

	public void setPlaneId(long planeId) {
		PlaneId = planeId;
	}

	public String getPlaneName() {
		return PlaneName;
	}

	public void setPlaneName(String planeName) {
		PlaneName = planeName;
	}

	public int getPlaneSeats() {
		return PlaneSeats;
	}

	public void setPlaneSeats(int planeSeats) {
		PlaneSeats = planeSeats;
	}
	
	
}
