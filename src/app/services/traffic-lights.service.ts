import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrafficLight, Colors } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightsService {
  private lights: BehaviorSubject<TrafficLight[]> = new BehaviorSubject<TrafficLight[]>([]);
  private activeLight: BehaviorSubject<TrafficLight | null> = new BehaviorSubject<TrafficLight | null>(null);

  public get lights$() {
    return this.lights.asObservable();
  };

  public get activeLight$() {
    return this.activeLight.asObservable();
  }

  private generateTrafficLightName(): string {
    if (this.lights.value.length === 0) {
      return 'traffic light 1';
    }
    const lastLightNumberValue = +this.lights.value[this.lights.value.length - 1].name.split(' ')[2];
    return `traffic light ${lastLightNumberValue + 1}`;
  }

  private generateNewTrafficLight(): TrafficLight {
    const defaultTrafficLight = {
      id: Date.now(),
      name: this.generateTrafficLightName(),
      color: Colors.Green,
    }

    if (this.lights.value.length === 0) {
      return {
        ...defaultTrafficLight,
        color: Colors.Red,
      };
    }

    const lastLightColor = this.lights.value[this.lights.value.length - 1].color;

    if (lastLightColor === Colors.Red) {
      return {
        ...defaultTrafficLight,
        color: Colors.Orange,
      };
    }

    if (lastLightColor === Colors.Orange) {
      return defaultTrafficLight;
    }

    if (lastLightColor === Colors.Green) {
      return {
        ...defaultTrafficLight,
        color: Colors.Red,
      };
    }

    return defaultTrafficLight;
  }

  public addLight() {
    const newLight = this.generateNewTrafficLight();
    this.lights.next([...this.lights.value, newLight]);
    this.changeActiveTrafficLight(newLight.id);
  }

  public deleteLight() {
    const target = this.lights.value.find(light => light.id === this.activeLight.value?.id);
    if (target) {
      this.lights.next(this.lights.value.filter(light => light.id !== target.id));
      this.activeLight.next(null);
    }
  }

  public changeActiveTrafficLight(id: number) {
    const target = this.lights.value.find(light => light.id === id);
    this.activeLight.next(target ? target : null);
  }

  public changeLightColor(color: Colors) {
    const targetIndex = this.lights.value.findIndex(light => light.id === this.activeLight.value?.id);
    if (targetIndex !== -1) {
      const lightsCopy = [...this.lights.value];
      lightsCopy[targetIndex].color = color;
      this.lights.next(lightsCopy);
    }
  }
}
